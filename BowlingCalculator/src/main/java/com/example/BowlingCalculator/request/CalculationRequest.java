package com.example.BowlingCalculator.request;

import java.util.Map;

public record CalculationRequest(Map<String, byte[]> game) {
}
