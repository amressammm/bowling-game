package com.example.BowlingCalculator.api;

import com.example.BowlingCalculator.Request.TestRequest;
import com.example.BowlingCalculator.request.CalculationRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.minidev.json.JSONArray;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;

import java.util.HashMap;
import java.util.Map;

import static net.bytebuddy.matcher.ElementMatchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class BowlingControllerIT extends AbstractControllerIT{
    @Test
    void testCallingCalculate()throws Exception{
        final String url = "/api/v1/bowling/calculate";
        Map<String, JSONArray> game =new HashMap<>();
        JSONArray x= new JSONArray();
        JSONArray y =new JSONArray();
        for(int i=0;i<12;i++){
            x.add(10);
        }

        y.add(10);
        y.add(3);
        y.add(3);
        for(int i=0;i<16;i++){
            y.add(0);
        }
        game.put("amr",x);
        game.put("malak",y);
        TestRequest f =new TestRequest(game);


        ResultActions result = this.mvc.perform(get(url)
                                .content(asJsonString(f))
                                .contentType(MediaType.APPLICATION_JSON));



        result.andExpect(status().isOk());
    }
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
