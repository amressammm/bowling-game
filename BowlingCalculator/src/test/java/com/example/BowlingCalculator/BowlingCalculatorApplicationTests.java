package com.example.BowlingCalculator;

import com.example.BowlingCalculator.utils.Game;
import org.junit.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static net.bytebuddy.matcher.ElementMatchers.is;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest
class BowlingCalculatorApplicationTests {
	@Autowired
	private Game game;

	@BeforeEach
	public void setUp(){
		game = new Game();
	}
	@Test

	public void canScoreGutterGame() {
		game.roll(0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0);
		assertEquals(0,game.score());

	}

	@Test

	public void canScoreGome0fOnes() {
		game.roll(1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1);
		assertEquals(20,game.score());

	}

	@Test

	public void canScoreSpareFollowedByThree() {
		game.roll(5,5, 3,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0);
		assertEquals(16,game.score());

	}

	@Test

	public void canScoreStrikeFollowedByThreeThenThree() {
		game.roll(10,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
		assertEquals(22,game.score());

	}

	@Test

	public void perfectGame() {
		game.roll(10,10,10,10,10,10,10,10,10,10,10,10);
		assertEquals(300,game.score());

	}
	@Test
	public void randomGame() {
		game.roll(1,2,10,3,4,5,5,10,2,2,0,0,0,0,0,0,1,5,10,9,0);
		assertEquals(71,game.score());

}
	@Test
	public void randomGame2() {
		game.roll(0,0,10,3,4,5,2,10,4,4,0,1,4,10,0,3,5,10,5,2);
		assertEquals(90,game.score());

}
}
