import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';



const Kanban = () => {
    const state = useSelector(state => state);
    // console.log(state);
    const [columns, setColumns] = useState({});

    useEffect(() => {
        setColumns(state)
    }, [state])

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
        }
    };

    return (
        <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
            <div className='flex justify-center items-center'>
                <div>
                    <div className='m-[8px] flex w-full m-h-[80vh]'>
                        {Object.entries(columns)?.map(([columnId, column], index) => {
                            return (
                                <Droppable key={columnId} droppableId={columnId}>
                                    {(provided, snapshot) => (
                                        <div className='flex flex-col min-h-[100px] bg-[#f3f3f3] min-w-[341px] rounded-md p-[15px] mr-[45px]'
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            <div className='text-[#10957d] bg-[rgba(16, 149, 125, 0.15)] py-[2px] px-[10px] rounded-md items-start'>{column.title}</div>
                                            {column.items.map((item, index) => (
                                                <TaskCard key={item} item={item} index={index} />
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            );
                        })}
                    </div>
                </div>
            </div>
        </DragDropContext>
    );
};

export default Kanban;