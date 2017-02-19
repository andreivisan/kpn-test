package io.programminglife.kpn.util;

import java.math.BigInteger;

/**
 * Created by andreivisan on 2/19/17.
 */
public class PrimeNumberUtil {

    public String generateNextPrime(String previousPrime) {
        return String.valueOf(new BigInteger(previousPrime).nextProbablePrime());
    }

}
