package io.programminglife.kpn;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigInteger;
import java.util.Map;

/**
 * Created by andreivisan on 2/19/17.
 */
@Controller
public class KpnController {

    @RequestMapping("/")
    public String index() {
        return "main";
    }

    @RequestMapping(value = "/nextPrime", method = RequestMethod.GET)
    @ResponseBody
    public String nextPrime() {
        return String.valueOf(new BigInteger("2000000000040").nextProbablePrime());
    }

}
