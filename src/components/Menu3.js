export function Menu3({location}) {
    return (
        <div>
            <div style={{marginTop: "5vh", marginBottom: "5vh"}}><b>Подменю 3</b></div>
            <div className="row">
                <div style={{marginRight: "30px"}}>
                    {location.text}
                </div>
                <div style={{marginLeft: "30px"}}>
                    <table style={{width: "100%"}}>
                        <tbody>
                        {location.data.map(
                            tr =>
                                ((tr.sel.toUpperCase().indexOf(location.selFilter.toUpperCase()) !== -1)
                                    && (tr.sum.toUpperCase().indexOf(location.sumFilter.toUpperCase()) !== -1)) &&
                                <tr>
                                    <td>{tr.id}</td>
                                    <td>{tr.sel}</td>
                                    <td>{tr.sum}</td>
                                </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}