package io.programminglife.kpn.util;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by andreivisan on 2/19/17.
 */
@RunWith(SpringRunner.class)
public class PrimeNumberUtilTest {

    @Test
    public void testGenerateNextPrime() throws Exception {
        PrimeNumberUtil primeNumberUtil = new PrimeNumberUtil();
        Assert.assertEquals("5", primeNumberUtil.generateNextPrime("3"));
    }

    @Test
    public void testGenerateNextPrimeForBigNumber() throws Exception {
        PrimeNumberUtil primeNumberUtil = new PrimeNumberUtil();
        Assert.assertEquals("2000000011", primeNumberUtil.generateNextPrime("2000000000")); //2 billions
    }

}
