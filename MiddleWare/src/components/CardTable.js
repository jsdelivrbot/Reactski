import React, {Component} from 'react';

import SummonInfoCard from './SummonInfoCard';

class CardTable extends Component{

  constructor(props){
    super(props);
  }

  renderSummonCard(summonInfoItem){
    const addr = summonInfoItem.address;
    const desc = addr.street.concat(addr.suit, ' ', addr.city, ',', addr.zipcode );
    return(
      <SummonInfoCard
        name={summonInfoItem.name}
        title={summonInfoItem.phone}
        description={desc}
        imgName={summonInfoItem.imgName}
        website={summonInfoItem.website}
        />
    );
  }

  render(){
    return(
      <div className="summonCardList">
        {this.props.summonsInfo.map(this.renderSummonCard)}
      </div>
    );
  }
}


export default CardTable;