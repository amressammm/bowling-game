import { useDispatch } from 'react-redux';
import players, {update,addTotal} from '../redux/players'
import {store} from '../redux/store'
import {add} from '../redux/players'

describe("testing stoe", ()=>{
    // render(<App />)
    it("players is empty at start", ()=>{
        
        expect(store.getState(players).players.players.length).toEqual(0);
    })

    it("player is added",()=>{
  
        const name="amr";
        store.dispatch(add({name,score:[],total:[]}));
        expect(store.getState(players).players.players.length).toEqual(1);


    })

    it("adding score to a player",()=>{
  
        store.dispatch(update([0,1]));
        expect(store.getState(players).players.players[0].score.length).toEqual(1);
     })

     it("testing if as seconf player is added successfully",()=>{
  
        const name="amr";
        store.dispatch(add({name,score:[],total:[]}));
        expect(store.getState(players).players.players.length).toEqual(2);


    })
    // I will stil add more tests

    
     
    
  });
  