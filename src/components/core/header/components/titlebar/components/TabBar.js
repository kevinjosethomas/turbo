
export const TabBar = props => {

  return (
    <div className="flex flex-row items-center justify-center">
      { props.tablist.map(tab => {
        <div className="flex flex-row items-center justify-start">
          { tab.url }
        </div>
      })}
    </div>
  );

}
