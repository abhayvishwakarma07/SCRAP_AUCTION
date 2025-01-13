import React from 'react'
import { Link } from 'react-router-dom'
import CountdownTimer from '../Timarcomponent/CountdownTimer'

function Card({row}) {
  const now = new Date();
  const endTime = new Date(new Date(row.info).getTime() + 48 * 60 * 60 * 1000);
  const difference = endTime - now;

  console.log(difference)
  return (
    <>
             <div class=" category_part justify-content-center border p-2 border-black m-4" style={{"width":"300px" ,"height":"550px"}}>
              <img src={`/assets/productcaticon/${row.pimgnm}`}  height={200} width={250} />
                <h3>name:{row.Ptitle}</h3>   
                <p>discription:{row.pdescription}</p>
                <p>price:{row.Pprice}</p>
                <p>ownerID:{row.userid}</p> 
                <CountdownTimer createdAt={row.info} />
                {
                  difference > 0 ?(
                    <Link
                      className="btn btn-primary w-100 rounded-lg"
                      to={`/biding/${row._id}`}
                    >
                      Bid Running
                    </Link>
                  ) :(
                    <Link
                      className="btn btn-primary w-100 rounded-lg"
                      to={`/bidinglist/${row._id}`}
                    >
                      bid closed
                    </Link>
                  ) 
                }

              </div>
    </>
  )
}

export default Card
