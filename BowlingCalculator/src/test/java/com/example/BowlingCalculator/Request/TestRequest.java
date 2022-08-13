package com.example.BowlingCalculator.Request;

import net.minidev.json.JSONArray;

import java.util.Map;

public record TestRequest(Map<String, JSONArray> game) {
}
