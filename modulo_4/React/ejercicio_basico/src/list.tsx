import React from "react";
import { Link, generatePath } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { OrganisationFilter } from "./organisation.filter";
import { Paginador } from "./paginador";
import { CenteredLayout } from './layouts';

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const pageSize = 5;

  const [data, setData] = React.useState<MemberEntity[]>([]);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [textFilter, setTextFilter] = React.useState("lemoncode");
  const [pageNumber, setPageNumber] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(0);

  //Aplicar el filtro del usuario para buscar por organizaciones
  const applyFilter = (textFilter: string) => {
    setTextFilter(textFilter);
  }

  //Cargar la página indicada
  const setPageContentByPageNumber = (page: number) => {
    setPageNumber(page);
    const inicio = Math.max((page - 1) * pageSize, 0);
    const fin = Math.min(page * pageSize, data.length);
    setMembers(data.slice(inicio, fin));
  }

  //Siempre que cambie el filtro "textFilter" recargar
  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${textFilter}/members`)
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        else throw Error();
      })
      .then((json) => {
        setData(json);
      })
      .catch(() => setData([]));
  }, [textFilter]);

  //Siempre que se recargue la lista de miembros, cargar la primera página
  React.useEffect(() => {
    setLastPage(Math.ceil(data.length / pageSize));
    setPageContentByPageNumber(1);
  }, [data]);

  return (
    <CenteredLayout>
      <Card>
        <CardHeader title="Hello from List page"></CardHeader>
        <CardContent>
          <OrganisationFilter defaultText="lemoncode" applyFilter={applyFilter} />
          <table className="table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>
                    <img src={member.avatar_url} style={{ width: "5rem" }} />
                  </td>
                  <td>
                    <span>{member.id}</span>
                  </td>
                  <td>
                    <Link to={generatePath("/detail/:id", { id: member.login })}>
                      {member.login}
                    </Link>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paginador currentPage={pageNumber} lastPage={lastPage} setNewPageNumber={setPageContentByPageNumber} />
        </CardContent>
      </Card>
    </CenteredLayout>
  );
};
