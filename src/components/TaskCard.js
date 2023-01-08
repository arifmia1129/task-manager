import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


const TaskCard = ({ item, index }) => {
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className='flex justify-center items-center  rounded-md bg-white mt-[15px] h-16'>
                        <p>{item.Task}</p>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;