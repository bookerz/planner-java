package com.bookerz.planner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PlannerController {
    @RequestMapping("/rest/alive")
    @ResponseBody
    public String aliveCheck() {
        return "alive";
    }
    @RequestMapping("/")
    public String index() {
        return "pages/index";
    }
    @RequestMapping("/planner/{ecoId}")
    @ResponseBody
    public String showId(@PathVariable("ecoId") Long ecoId) {
        return "funkar";
    }

}
