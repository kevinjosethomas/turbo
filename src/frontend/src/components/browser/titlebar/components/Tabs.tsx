import { FC, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { TabProps, TabComponentProps } from "../../../../lib/types";
import LoadingFavicon from "../../../../assets/icons/browser/loading-favicon.gif";
import MissingFavicon from "../../../../assets/icons/browser/missing-favicon.svg";

interface TabsProps {
  tablist: TabProps[];
  setTablist: any;
}

const Bar: FC<TabsProps> = (props) => {
  const onDragEnd = (result: any) => {
    return result;
  };

  return (
    <div className="flex flex-row items-center justify-start h-full space-x-4">
      <Search />
      <DragDropContext>
        <Droppable>
          {(provided: any) => (
            <Tabs
              {...props}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
            </Tabs>
          )}
        </Droppable>
      </DragDropContext>
      <NewTab />
    </div>
  );
};

const Tabs: FC<TabsProps> = (props) => {
  return (
    <div className="flex flex-row itemss-center justify-center h-full window-drag-none">
      {props.tablist.map((tab: TabProps, index: number) => (
        <TabContainer
          key={tab.id}
          index={index}
          id={tab.id}
          url={tab.url}
          friendlyUrl={tab.friendlyUrl}
          title={tab.title}
          favicon={tab.favicon}
          active={tab.active}
          suffix={
            index + 1 !== props.tablist.length
              ? !props.tablist[index + 1].active
              : true
          }
          tablist={props.tablist}
          setTablist={props.setTablist}
        />
      ))}
    </div>
  );
};

const Search: FC = () => {
  return (
    <i className="fas fa-caret-circle-down text-fore-10 hover:text-fore-20 transition duration-500 window-drag-none" />
  );
};

const TabContainer: FC<TabComponentProps> = (props) => {
  const closeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided: any) => (
        <Tab
          {...props}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        ></Tab>
      )}
    </Draggable>
  );
};

const Tab: FC<TabComponentProps> = (props) => {
  const closeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`flex flex-row items-center justify-between h-full px-4 w-48 cursor-default select-none ${
        props.active
          ? "active-tab relative bg-back-20 rounded-t border-l-2 border-t-2 border-r-2 border-back-30"
          : `tab hover:bg-back-20 ${props.suffix ? "relative tab-suffix" : ""}`
      } `}
      onDragStart={(e) => e.dataTransfer.setDragImage(new Image(), 0, 0)}
      onMouseDown={(event) => {
        if (
          closeRef.current &&
          !closeRef.current.contains((event as any).target)
        )
          !props.active ? window.ipc.tab.emitters.active(props.id) : void 0;
      }}
    >
      <div className="flex flex-row items-center justify-center space-x-2 w-full max-w-xxs">
        <img
          src={props.favicon || LoadingFavicon}
          className="w-4"
          onError={(e) => ((e.target as HTMLImageElement).src = MissingFavicon)}
        />
        <span
          className={`w-full relative text-xs overflow-hidden whitespace-nowrap ${
            props.active
              ? "active-tab-title text-fore-20"
              : "tab-title text-fore-10"
          }`}
        >
          {props.title || props.url}
        </span>
      </div>
      <div
        className="flex flex-col items-center justify-center w-5 h-5 min-w-max rounded text-fore-10 hover:text-fore-20 hover:bg-back-30 transition duration-500"
        ref={closeRef}
        onClick={(e) => {
          e.stopPropagation();
          window.ipc.tab.emitters.close(props.id);
        }}
      >
        <i className="far fa-times text-sm" />
      </div>
    </div>
  );
};

const NewTab: FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-8 h-8 text-fore-10 hover:text-fore-20 hover:bg-back-30 rounded transition duration-500 window-drag-none"
      onClick={window.ipc.tab.emitters.new}
    >
      <i className="far fa-plus" />
    </div>
  );
};

export default Bar;
