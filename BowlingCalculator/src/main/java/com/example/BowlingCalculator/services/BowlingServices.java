package com.example.BowlingCalculator.services;

import com.example.BowlingCalculator.utils.Game;
import com.example.BowlingCalculator.dto.Player;
import com.example.BowlingCalculator.request.CalculationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BowlingServices {
    private Game game;
    public List<Player> calculate(CalculationRequest request) {
        List<Player> result = new ArrayList<>();
        List<String> l = new ArrayList<String>(request.game().keySet());

        for(int i=0;i<l.size();i++) {
            boolean isPerfect;
            game = new Game();
            game.roll(fromByteArray(request.game().get(l.get(i))));
            int score=game.score();
            if(score==300)
                isPerfect=true;
            else{
                isPerfect=false;
            }

            Player player =new Player(l.get(i),score ,isPerfect);
            result=insrtSort(result,player);


        }
        return result;
    }

    public int [] fromByteArray(byte[] bytes) {
       int[] x = new int[bytes.length];
       for(int i=0;i<bytes.length;i++){
           x[i]=bytes[i];
       }
       return x;
    }

    public List<Player> insrtSort(List<Player> players,Player player){
        for(int i=0;i<players.size();i++){
            if(player.getTotalScore()>players.get(i).getTotalScore()){
                players.add(i,player);
                return players;
            }

        }
        players.add(player);
        return players;
    }
}
