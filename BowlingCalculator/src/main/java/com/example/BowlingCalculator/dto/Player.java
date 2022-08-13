package com.example.BowlingCalculator.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class Player {
    private String name;
    private int totalScore;
    private boolean isPerfect;

}
