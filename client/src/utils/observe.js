class Observer {
	constructor() {
		this.EVENTID = 0
	}
	
	addEvent(type, hnd){
		if(!this.listeners) this.listeners = {};
		if(!this.listeners[type]) this.listeners[type] = {};
		
		const eventId = Observer.EVENTID++;
		this.listeners[type][eventId] = hnd;
		
		return eventId;
	}

	fireEvent(type){
		if(!this.listeners || !this.listeners[type]) return false;
		let handlers = this.listeners[type], eventId, 
			args =  Array.prototype.slice.call(arguments);
		if(handlers.stop) return false;
			
		args.shift();
		for(eventId in handlers) if(handlers.hasOwnProperty(eventId)){
			if(eventId !== "stop"){
				if(!handlers[eventId].stop){
					handlers[eventId].apply(this, args);
				}
			} 
		};
	}

	removeEvent(type, hnd){
		if(!this.listeners || !this.listeners[type]) return -1;
		const handlers = this.listeners[type], eventId = -1;
		if(typeof hnd === "function"){
			for(eventId in handlers) if(handlers.hasOwnProperty(f)){
				if(handlers[eventId] === hnd){
					delete handlers[eventId];
					break;
				} 
			};
			return !handlers[eventId];
		}else{
			if(handlers[hnd]) delete handlers[hnd]
			return !handlers[hnd];
		};
	}

	stopEvent(type, hnd){
		if(!this.listeners || !this.listeners[type]) return -1;
		const handlers = this.listeners[type], eventId = -1; 
		if(hnd){
			if(typeof hnd === "function"){
				for(eventId in handlers) if(handlers.hasOwnProperty(f)){
					if(handlers[eventId] === hnd){
						handlers[eventId].stop = true;
					}
				};
			}else{
				handlers[hnd].stop = true;
			}
		}else{  
		handlers.stop = true;
		}
	}

	restoreEvent(type, hnd){
		if(!this.listeners || !this.listeners[type]) return -1;
		const handlers = this.listeners[type], eventId = -1;
		if(hnd){
			if(typeof hnd === "function"){
				for(eventId in handlers) if(handlers.hasOwnProperty(f)){
					if(handlers[eventId] === hnd){
						handlers[eventId].stop = false;
					}
				};
			}else{
				handlers[hnd].stop = false;
			}
		}else{
			handlers.stop = false;
		}
	}
}


export default Observer