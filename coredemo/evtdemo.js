const events = require('events');
const eventEmitter = new events.EventEmitter();
// Define Event
function mail(subject){

}
eventEmitter.setMaxListeners(11);
eventEmitter.on('newyearwish',mail);
eventEmitter.emit('newyearwish','Happy new year');
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire2  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire3  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire4  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire5  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire6  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire7  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire8  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire9  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire10  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire11  ',val);
})
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Fire12  ',val);
})

// Event Fire
eventEmitter.emit('ring','AMIT');