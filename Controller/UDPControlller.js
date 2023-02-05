const UDP = require('../Model/UDPModal')

const userDiscountProduct = async (req, res)=> {
    try {
        const result = new UDP({
            user: req.body.user,
            product: req.body.product,
            newPrice: req.body.newPrice
          });
    
          const udpData = await UDP.findOne({ user:req.body.user});
          if (udpData) {
            res.send("Email Already Exisist");
          } else {
            const udp_data = await result.save();
            res.status(200).send({sucess:true, data:udp_data});
          }
    } catch (error) {
        console.log(error);
    res.send('somthing Wrong');
    }
};

const getUDPs = async (req, res) => {
    const udp = await UDP.find()
    .populate('user', 'email')
    .populate('product','name regularPrice');
    
    if(!udp) {
        res.status(500).json({success: false})
    } 
    res.send(udp);
}
const getUDP = async (req, res) => {
    const udp = await UDP.findById(req.params.id)
    .populate('user', 'email')
    .populate('product','name regularPrice');
    
    if(!udp) {
        res.status(500).json({success: false})
    } 
    res.send(udp);
}

const updateUDP = async (req, res) => {
    const result = await UDP.findByIdAndUpdate(
      req.params.id,
      {
        newPrice: req.body.newPrice
      },
      { new: true}
  ) .populate('user', 'email')
  .populate('product','name regularPrice');

  if(!result)
  return res.status(400).send('the order cannot be update!')

  res.send(result);
}

module.exports = {
    userDiscountProduct, getUDPs, getUDP, updateUDP,
}