import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xE05e4c54daf74965a71c5ABB30575594EdA286BD'
);

export default instance;