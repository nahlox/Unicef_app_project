import { createConnection } from "typeorm"

export const databaseprovider = ({

    provide:'DATABASE_CONNECTION',
    useFactoty:async () => {
        await createConnection({
            type: 'postgres',
            database: 'zdxudntd',
            entities: ['dist/src/**/*.entity.ts'],
            username: 'zdxudntd',
            password: 'ZS_BXkdYo7JniTZJxcZB7uvTNoPOBQM-',
            port: 5432,
            host: 'abul.db.elephantsql.com',
            synchronize: true,

        })
        
    },
});