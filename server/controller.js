module.exports={

    getAllHouses: (req, res) =>{
  
        const dbInstance= req.app.get('db');
        dbInstance.getAll_Houses()
        .then(Houses => res.status(200).send(Houses))
        .catch(err => {
            res.status(500).send({errorMessage: "Unable to Get All Houses"})
            console.log(err)
        });
        
    },
    
    
    createHouse: (req, res) => {
        const dbInstance = req.app.get("db");
    
        const {name, address, city, state, zip} = req.body;
    
        dbInstance.create_House(name, address, city, state, zip)
    
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "Can't Add a house to db"})
            console.log(err)
        });
    },



    deleteHouses: (req, res, next)=> {
        const dbInstance= req.app.get('db');
        dbInstance.delete_House([id])
        .then(()=> res.sendStatus(200).send())
    }
    
    
    
    
    
    
    
}

