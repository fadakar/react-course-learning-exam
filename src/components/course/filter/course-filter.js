import React, {useEffect, useState} from 'react';


function CourseFilter({onFilter, teachers, hardnesses, searchTerm}) {

    const [filterState, setFilterState] = useState({
        searchTerm: '',
        teachers: [],
        hardnesses: [],
    });

    useEffect(() => {
        searchTerm && setFilterState({...filterState, searchTerm })
    }, [searchTerm]);


    const changeFilterHandler = (key, value) => {
        if (['teachers', 'hardnesses'].includes(key)) {
            if (filterState[key].includes(value)) {
                filterState[key] = filterState[key].filter(item => item !== value);
            } else {
                filterState[key].push(value);
            }
            setFilterState({ ...filterState });
        } else {
            setFilterState({
                ...filterState,
                [key]: value
            });
        }

    }

    const onSubmitHandler = () => {
        onFilter(filterState);
    }

    const clearHandler = () => {
        setFilterState({
            searchTerm: '',
            teachers: [],
            hardnesses: []
        });
        onFilter({
            searchTerm: '',
            teachers: [],
            hardnesses: []
        });
    }


    return (
        <>
            <div className="form-group">
                <div className="input-with-icon">
                    <input type="text" className="form-control" placeholder="نام دوره..."
                           value={filterState.searchTerm}
                           onChange={(e) => changeFilterHandler('searchTerm', e.target.value)}/>
                    <i className="ti-search"></i>
                </div>
            </div>

            <div className="form-group">
                <h6>مدرسین برتر</h6>
                <ul className="no-ul-list mb-3">
                    {teachers?.map((teacher) => {
                        return (
                            <li key={teacher.id}>
                                <input id={`t-${teacher.id}`}
                                       className="checkbox-custom"
                                       type="checkbox"
                                       checked={filterState.teachers?.includes(teacher.id.toString())}
                                       value={teacher.id}
                                       onChange={(e) => changeFilterHandler('teachers', e.target.value)}/>

                                <label htmlFor={`t-${teacher.id}`} className="checkbox-custom-label">
                                    {teacher.fullname}
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="form-group">
                <h6>سطح مهارت</h6>
                <ul className="no-ul-list mb-3">
                    {hardnesses?.map((hardness) => {
                        return (
                            <li key={hardness.id}>
                                <input id={`hn-${hardness.id}`}
                                       className="checkbox-custom"
                                       type="checkbox"
                                       checked={filterState.hardnesses?.includes(hardness.id.toString())}
                                       value={hardness.id}
                                       onChange={(e) => changeFilterHandler('hardnesses', e.target.value)}/>

                                <label htmlFor={`hn-${hardness.id}`} className="checkbox-custom-label">
                                    {hardness.label}
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <button className="btn theme-bg rounded full-width" onClick={onSubmitHandler}>فیلتر</button>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <button className="btn btn-warning rounded full-width" onClick={clearHandler}>پاک کن</button>
                </div>
            </div>

        </>
    );
}

export default CourseFilter;