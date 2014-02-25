package se.inera.certificate.lab.portal.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import se.inera.certificate.lab.support.ModuleEntryPoint;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 */
@Controller
public class ModuleController {

    @Autowired
    private List<ModuleEntryPoint> moduleEntryPoints;

    @RequestMapping(value = "/modulesMap", method = RequestMethod.GET)
    public @ResponseBody Map<String, String> getModulesMap() {

        Map<String, String> modules = new HashMap<String, String>();
        for (ModuleEntryPoint entryPoint : moduleEntryPoints) {
            modules.put(entryPoint.getModuleName(), entryPoint.getModuleScriptPath());
        }

        return modules;
    }


}
