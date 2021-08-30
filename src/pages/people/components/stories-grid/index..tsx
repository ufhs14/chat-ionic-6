import { IonCol, IonGrid, IonRow } from '@ionic/react'
import { Story } from './model/story'
import { StoriesGridProps } from './props'

export const StoryGrid: React.FC<StoriesGridProps> = ({ values }) => {
    return (
        <IonGrid>
            <IonRow>
                {values?.map((data, index) => {
                    return (
                        <IonCol key={index} size="6">
                            <Story
                                name={data.name}
                                profileImage={data.profileImage}
                                imageStore={data.imageStore}
                            ></Story>
                        </IonCol>
                    )
                })}
            </IonRow>
        </IonGrid>
    )
}
