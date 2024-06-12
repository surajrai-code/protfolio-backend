const Contact=require('../models/contactModels');

// getting enquire form
exports.saveContactForm=async(req,res)=>{
    try{
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }

}

// deleting enquire form data 

exports.deleteSaveData=async(req,res)=>{
    try{
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
          return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted' });
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}