package io.programminglife.kpn;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * Created by andreivisan on 2/19/17.
 */
@Controller
public class KpnController {

    @RequestMapping("/")
    public String index(Map<String, Object> model) {
        return "main";
    }

}
