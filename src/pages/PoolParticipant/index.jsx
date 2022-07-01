import React from "react";
import BarChart from "../../Charts/BarChart";
import LineChart from "../../Charts/LineChart";

function PoolParticipant() {
  return (
    <div>
      PoolParticipant
      {/* <LineChart/> */}
      <BarChart/>

      {/* <Row gutter={[32,32]} className="crypto-card-conatiner">
    {cryptosList.map((items) => {return(
        <Col xs={24} sm={12} lg={7} className="crypto-card" >
          <NavLink key={items.rank} to={`${items.rank}`}>
             <Card title={`${items.rank}. ${items.name}`} extra={<img className="crypto-image" src={items.logo_url} />} hoverable >
               <p>Price : Rs. {millify(items.price*76)}</p>
              <p>Market Cap : {millify(items.market_cap)}</p>
              <p>Daily Change : {millify(items.ytd.price_change_pct)}%</p> 
            </Card> 
          </NavLink>
          </Col>
          ) })}
          </Row> */}
    </div>
  );
}

export default PoolParticipant;
