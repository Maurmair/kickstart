import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x2d4200555444e1D36E39EAA2736a0a108072863b'
);

export default instance;