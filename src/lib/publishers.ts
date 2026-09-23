/**
 * Provides build-time data-access helpers for publisher records.
 *
 * Queries accept an injectable database client so they can use the shared
 * application database in Astro pages and an in-memory database in tests.
 */
import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';

/**
 * Retrieves all publishers ordered alphabetically by name.
 *
 * @param db - Database client used to execute the query.
 * @returns All publishers mapped to the application-facing publisher type.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
