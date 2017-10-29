'use strict';

require('./assists/errorAssist');

require('./assists/numberAssist');

require('./assists/stringAssist');

require('./assists/arrayAssist');

require('./assists/objectAssist');

/**
 * Created by joy on 12/10/2017.
 */

global['logger'] = global['logger'] || console;