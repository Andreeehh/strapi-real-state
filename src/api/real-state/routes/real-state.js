'use strict';

/**
 * real-state router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::real-state.real-state');
