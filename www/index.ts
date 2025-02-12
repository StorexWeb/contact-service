import { Server } from "@storexweb/kernel";

/*
 * Those of us with this ancient compulsion to repeat themselves,
 * sometimes start with a single kernel of something.
 */
const server = new Server({ name: "CONTACT_SERVICE", dist: `${__dirname}/..`},

);


/*
 * The purpose - where I start - is the idea of use.
 * It is not recycling, it's reuse.
 */
server.start();