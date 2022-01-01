import psycopg2
from psycopg2.extras import RealDictCursor


def ConectaDb():
    con = psycopg2.connect(host = '200.129.44.249',
                           database = 'trab_02_496770_497696',
                           user = 'fbd2021',
                           port = 5432,
                           password = 'Ck0114')
    return con

def ExecutarQueryPesquisa(sql):

    con = ConectaDb()
    cur = con.cursor(cursor_factory=RealDictCursor)

    try:
        cur.execute(sql)
        con.commit()
        response = cur.fetchall()
        con.close()
        return response
    except (Exception, psycopg2.DatabaseError) as error:
        print("Error: %s" % error)
        con.rollback()
        cur.close()
        return 1

def ExecutarQuery(sql):

    con = ConectaDb()
    cur = con.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(sql)
        con.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print("Error: %s" % error)
        con.rollback()
        cur.close()
        return 1

    con.close()

