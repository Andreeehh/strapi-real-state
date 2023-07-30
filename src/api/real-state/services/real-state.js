'use strict';

/**
 * real-state service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::real-state.real-state');
