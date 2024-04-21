const express=require("express");
const res = require("express/lib/response");
const app=express();
const fs = require('fs');
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

const add= (n1,n2) => { 
    return n1+n2;       
}
app.get("/add", (req,res)=>{ 
    try{
    const n1= parseFloat(req.query.n1); 
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) { 
        logger.error("n1 is incorrectly defined"); 
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { 
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for addition'); 
    const result = add(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

const subtraction= (n1,n2) => { 
    return n1-n2;       
}
app.get("/subtraction", (req,res)=>{ 
    try{
    const n1= parseFloat(req.query.n1); 
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) { 
        logger.error("n1 is incorrectly defined"); 
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { 
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for subtraction'); 
    const result = subtraction(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

const multiplication= (n1,n2) => { 
    return n1*n2;       
}
app.get("/multiplication", (req,res)=>{ 
    try{
    const n1= parseFloat(req.query.n1); 
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) { 
        logger.error("n1 is incorrectly defined"); 
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { 
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for multiplication'); 
    const result = multiplication(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

const division= (n1,n2) => { 
    return n1/n2;       
}
app.get("/division", (req,res)=>{ 
    try{
    const n1= parseFloat(req.query.n1); 
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) { 
        logger.error("n1 is incorrectly defined"); 
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { 
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    if(n2==0){
        logger.error("n2 can't be zero");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for division'); 
    const result = division(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

const power= (n1,n2) => { 
    return Math.pow(n1,n2);       
}
app.get("/power", (req,res)=>{ 
    try{
    const n1= parseFloat(req.query.n1); 
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) { 
        logger.error("n1 is incorrectly defined"); 
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { 
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for exponentiation'); 
    const result = power(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

const sqrt= (n1,n2) => { 
    return Math.sqrt(n1,n2);       
}
app.get("/sqrt", (req,res)=>{ 
    try{
    const n1= parseFloat(req.query.n1); 
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) { 
        logger.error("n1 is incorrectly defined"); 
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { 
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }

    if(n2==0){
        logger.error("n2 can't be zero");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for squareroot'); 
    const result = sqrt(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

const modulo= (n1,n2) => { 
    return n1%n2;       
}
app.get("/modulo", (req,res)=>{ 
    try{
    const n1= parseFloat(req.query.n1); 
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) { 
        logger.error("n1 is incorrectly defined"); 
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { 
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }

    if(n2==0){
        logger.error("n2 can't be zero");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for modulo operation'); 
    const result = modulo(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});


const port=3040;
app.listen(port,()=>{
    console.log("i am listening to port ",port);
})

