import { ResponsiveWaffle } from '@nivo/waffle'
import React from 'react';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function WaffleChart({ data, title, colorSchema }) {
    return (
        <React.Fragment>
            <h4 style={{ textAlign: 'center' }}>{title}</h4>
            <ResponsiveWaffle
                data={data}
                total={100}
                rows={10}
                columns={10}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: `${colorSchema}` }}
                borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
                animate={false}
                motionStiffness={90}
                motionDamping={11}
                tooltip={({ id, value, color, cost }) => (
                    <strong>
                        <p dir='auto'> {id}: {value} % </p>
                        <p> الانفاق : {cost} م د</p>
                    </strong>
                )}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        justify: false,
                        translateX: -100,
                        translateY: 0,
                        itemsSpacing: 4,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        itemTextColor: '#777',
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                    itemBackground: '#f7fafb'
                                }
                            }
                        ]
                    }
                ]}
            />
        </React.Fragment>

    )
}