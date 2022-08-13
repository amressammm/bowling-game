package com.example.BowlingCalculator.facade;

import com.example.BowlingCalculator.dto.Player;
import com.example.BowlingCalculator.request.CalculationRequest;
import com.example.BowlingCalculator.services.BowlingServices;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BowlingFacade {
    @Autowired
    private final BowlingServices bowlingServices;
    public List<Player> calculate(CalculationRequest game) {
        return bowlingServices.calculate(game);
       
    }
}
