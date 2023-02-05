const EasyPost = require('@easypost/api');
const apiKey = process.env.API_KEY;
const easypost = new EasyPost(process.env.API_KEY);
const {shipmentSchema, parcelSchema, from_addressSchema, to_addressSchema} = require('../../Model/Shiping_API_Modal/addressModal')

const addShiping = async (req,res) => {
  try {
    const dataSet = {
        to_address: req.body.to_address,
        from_address: req.body.from_address,
        parcel: req.body.parcel
    }
    const toSaver = new to_addressSchema(dataSet.to_address);               //capturing to_Address data
    const fromSaver = new from_addressSchema(dataSet.from_address);         // capturing from_Address data
    const parcelSaver = new parcelSchema(dataSet.parcel);                   // capturing parcel data
    Promise.all([toSaver.save(), fromSaver.save(), parcelSaver.save()])     // saving all data
    .then(async (data) => {          // after saving data in mongo
        console.log(data)
        const shipmentData = new shipmentSchema(data);      // capturing shipment data
        await shipmentData.save();                                // saving shipment data
        try{
            const shipment = new easypost.Shipment(data)
            shipment.save()        
                .then((data)=>{console.log(data);console.log("Sent to easypost via main api")})
                .catch((err)=>{console.log(err)})
        }
        catch(err){
            console.log(err);
        }
        try{                        // sending data to easypost
            await easypost.Shipment.create({data})
            console.log("sent to easypost");
            res.status(200).json({message: "sent to easypost"});
        }
        catch(err){                 // if not sent to easypost
            console.log(err);
            res.status(200).json({message: "not sent to easypost, but data saved"});
        }
    })
    .catch((err) => {               // if not saved in mongo
        res.status(200).json({message: "Validataion Error in recived data",error:err});
    })
      }
    catch (error) {                 // if any connection based error
        console.log(error);
        res.status(500).send('somthing Wrong');
    }
}

module.exports = {addShiping};
