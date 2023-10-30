import miModelo from "../modelos/miModelo.js";

export const getAllApdz = async (req, res) =>{
    try {
        
        const aprendiz = await miModelo.findAll();
        res.json(aprendiz);

    } catch (error) {

        res.json({messege: error.messege});
        
    }
}

export const getApdz = async (req, res) =>{
    try {
        
        const Apdz = await miModelo.findAll({
            ///Consulta
            where: {id:req.params.id}

        });

        res.json(Apdz[0]);

    } catch (error) {
        
        res.json({messege: error.messege});


    }
}

export const createApdz = async (req, res) =>{
    try {
        
        await miModelo.create(req, res)
        ///Consulta 
        res.json({
            "message": "¡Registro exitoso!"
        });

    } catch (error) {
        
        res.json({messege: error.messege});

    }
}

export const updateApdz = async (req, res) =>{
    try {

        ///Consulta
        await miModelo.update(req.body, 
        {
            
            where: {id:req.params.id}

        });

        res.json({
            "message": "¡Registro actualizado correctamente!"
        });

    } catch (error) {
        
        res.json({messege: error.messege});

    }
}

export const deleteApdz = async (req, res) =>{
    try {

        ///Consulta
        await miModelo.destroy({
            
            where: {id:req.params.id}

        });

        res.json({
            "message": "¡Registro eliminado correctamente!"
        });

    } catch (error) {
        
        res.json({messege: error.messege});

    }
}