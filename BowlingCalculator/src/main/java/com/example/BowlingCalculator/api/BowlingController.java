package com.example.BowlingCalculator.api;

import com.example.BowlingCalculator.dto.Player;
import com.example.BowlingCalculator.facade.BowlingFacade;
import com.example.BowlingCalculator.request.CalculationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/bowling")
@CrossOrigin(origins = "*")
public class BowlingController {
    @Autowired
    private final BowlingFacade bowlingFacade;

    @PostMapping("/calculate")
    public List<Player> calculate(@RequestBody CalculationRequest request){


        return (bowlingFacade.calculate(request));


    }
}
