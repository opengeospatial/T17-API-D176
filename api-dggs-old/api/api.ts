export * from './capabilities.service';
import { CapabilitiesService } from './capabilities.service';
export * from './dAPA.service';
import { DAPAService } from './dAPA.service';
export * from './dGGSAccess.service';
import { DGGSAccessService } from './dGGSAccess.service';
export const APIS = [CapabilitiesService, DAPAService, DGGSAccessService];
