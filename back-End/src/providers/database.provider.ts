import { createConnection } from "typeorm"

export const databaseprovider = ({

    provide:'DATABASE_CONNECTION',
    useFactoty:async () => {
        await createConnection({
            type: 'postgres',
            database: 'rawad',
            entities: ['dist/src/**/*.entity.ts'],
            username: 'rawad',
            password: 'test',
            port: 5432,
            synchronize: true,

        })
        
    },
});