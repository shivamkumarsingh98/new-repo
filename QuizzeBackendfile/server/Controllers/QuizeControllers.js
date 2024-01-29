
const QuizeSchima = require('../Models/QuizeSchima')

const createQuize = async (req, res) => {
    console.log(req.userId)
    try {
        console.log("ok", req.body)
        const {
            QuizeName,
            Question,
            options,
            ImageUrls,
            correctOption
        } = req.body


        const Quize = new QuizeSchima({
            QuizeName,
            Question,
            options: options || [],
            ImageUrls: ImageUrls || [],
            correctOption
        });
        await Quize.save()
        res.status(200).json({ message: "quize creat sussfully" })
    } catch (error) {
        res.status(500).json({ message: "entrnal server error", error: error.message })

    }
}

const show = async (req, res) => {
    const quizeId = req.params.id;
    try {
        const creatQuize = await QuizeSchima.findById(quizeId)

        if (creatQuize) {
            res.status(200).json({ message: "create quize is avlivale" })
        }
        if (!creatQuize) {
            res.status(400).json({ message: "create quize is not avlivele" })
        }
    } catch (error) {
        res.status(500).json({ message: "show route somthing worng", error: error.message })
    }

}

const upDate = async (req, res) => {
    const quizeId = req.params.id
    const { QuizeName,
        Question,
        options,
        ImageUrls,
        correctOption } = req.body
    try {
        const quize = await QuizeSchima.findById(quizeId)
        if (!quize) {
            res.status(400).json({ message: "job is not found" })
        }

        quize.QuizeName = QuizeName || quize.QuizeName;
        quize.Question = Question || quize.Question;
        quize.options = options || quize.options;
        quize.ImageUrls = ImageUrls || quize.ImageUrls;
        quize.correctOption = correctOption || quize.correctOption;

        await quize.save();
    } catch (error) {

    }


}

const remove = async (req,res)=>{
    const quizeId = req.params.id
    try{
    const deletQuize = await QuizeSchima.findByIdAndDelete(quizeId)
    if(deletQuize){
        res.status(200).json({ message: "Quize deleted successfully" });
    }else{
        res.status(404).json({ message: "Quize not found" });
    }
}catch(error){
    res.status(500).json({message: "Internal server error", error: error.message })
}

}





module.exports = { show, createQuize, upDate,remove }