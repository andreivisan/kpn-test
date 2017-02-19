package io.programminglife.kpn;

import io.programminglife.kpn.util.PrimeNumberUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * Created by andreivisan on 2/19/17.
 */
@Controller
public class KpnController {

    @RequestMapping("/")
    public String index() {
        return "main";
    }

    @RequestMapping(value = "/nextPrime/{previousPrime}", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public String nextPrime(@PathVariable String previousPrime) {
        PrimeNumberUtil primeNumberUtil = new PrimeNumberUtil();
        return primeNumberUtil.generateNextPrime(previousPrime);
    }

}
