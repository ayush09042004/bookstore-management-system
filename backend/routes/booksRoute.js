const router= require("express").Router();
const bookModel=require("../models/booksModel");//..->first moved outside connection folder

//post REQUEST
router.post("/add",async(req,res)=>{
    try{
const data=req.body;//fetch data from frontend/console
const newBook= new bookModel(data);//putting data inside model(newBook)   
await newBook.save().then(()=>{
    res.status(200).json({message:"Book Added Succesfully"});
});//storing data in database
}
    catch(error){
        console.log(error);
    }
});
//GET request
router.get("/getBooks", async (req,res) =>{
    let books;
    try{
        books= await bookModel.find();
        res.status(200).json({books});
    }
        catch(error){
            console.log(error);
        }
    
});

//get request with id
router.get("/getBooks/:id",async(req,res)=>{
    let book;
    const id=req.params.id;//requesting id 
    try{
     book=await bookModel.findById(id);
     res.status(200).json({book});
    }
    catch(error){
        console.log(error);
    }
})

//Update books by Id
 
router.put("/updateBook/:id",async(req,res)=>{
    const id=req.params.id;
    const {bookname,description,author,image,price}=req.body;
    let book;
    try{
      book=await bookModel.findByIdAndUpdate(id,{
        bookname,
        description,
        author,
        image,
        price,
      });
      await book.save().then(()=> res.json({message:"Data Updated"}));
    }
    catch(error){
        console.log(error);
    }
});

//Delete Book By Id
router.delete("/deleteBook/:id",async (req,res)=>{
    const id=req.params.id;
    try{
await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({"message":"Deleted Succesfully"}));
    }
    catch(error){
        console.log(error);
    }
});


module.exports=router;