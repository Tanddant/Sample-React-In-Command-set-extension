import { PrimaryButton } from '@fluentui/react';
import * as React from 'react';

export interface IMainCompProps { }

export const MainComp: React.FunctionComponent<IMainCompProps> = (props: React.PropsWithChildren<IMainCompProps>) => {
    const [count, setCount] = React.useState<number>(0);

    return (
        <>
            <div style={{ display: 'grid', placeItems: "center", height: 250 }}>

                <PrimaryButton onClick={() => setCount(count + 1)}>Click me ({count})</PrimaryButton>

            </div>
        </>
    );
};