import Stripe from "stripe";
const stripe = Stripe(
  "sk_test_51Pto0KRrWShI0bovq55sZSXkIntc6TjHzHUUYFN3CBgn6tKJVXsLZtV9iRtKWADHh39HHAWgNP8PdNtcAAQ8fVt000mwrt0DzZ"
);

async function Gateway(req, res) {
  try {
    const product = await stripe.products.create({
      name: req.body.title,
      description: req.body.description,
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: req.body.bidprice * 100, // 100 INR
      currency: "inr",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3001/cancel",
      customer_email: req.body.user_email,
    });

    res.json({ url: session.url, success_url: session.success_url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default Gateway;
