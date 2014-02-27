package se.inera.certificate.lab.module1;

import org.springframework.stereotype.Component;
import se.inera.certificate.lab.support.ModuleEntryPoint;

/**
 *
 */
@Component
public class Module1EntryPoint implements ModuleEntryPoint {
    @Override
    public String getModuleName() {
        return "webjars-module1";
    }

    @Override
    public String getModuleScriptPath() {
        return "/js/module";
    }
}
