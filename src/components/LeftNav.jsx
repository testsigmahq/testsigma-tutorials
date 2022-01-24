/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions */
import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import './LeftNav.scss';
import book from './images/book.png';
import web from './images/box.svg' ;
import android from './images/android.svg';
import ios from './images/ios.svg';
import mobile from './images/mobile_line.svg';

// import { caret } from './caret.svg';


const { v4: uuidv4 } = require('uuid');

let slugs;

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        const { data, isRoot } = this.props;
        this.state = {
            data,
            isRoot,
            active: [],
            currentUrl: '',
        };
        this.toggleActive = this.toggleActive.bind(this);
    }

    componentDidMount() {
        this.setState({ currentUrl: window.location.pathname });
    }

    setActive = (name) => {
        const { active } = this.state;
        if (active.indexOf(name) === -1) {
            this.setState((prev) => ({ active: [...prev.active, name] }));
        }
    } // sets a given list item as active

    toggleActive = (e) => {
        let title;
        if (e.target.attributes.identifier) {
            title = e.target.attributes.identifier.value;
        } else {
            title = e.target.nextSibling.attributes.identifier.value;
        }
        const { active } = this.state;
        const titleIndex = active.indexOf(title);
        if (titleIndex !== -1) {
            active.splice(titleIndex, 1);
            this.setState({ active });
        } else {
            this.setActive(title);
        }
    } // toggles list item as active or inactive based on previous state. Triggered on click

    isActive = (name) => {
        const { active } = this.state;
        return active.includes(name);
    }

    inUrl = (url) => {
        const { currentUrl } = this.state;
        return currentUrl.includes(url);
    }
    // bool to return whether current list item appears in the url
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    child = (url) => {
        const name = slugs.filter((val) => url === val.fields.slug);
        const { title } = name[0].frontmatter;
        return (
            <li key={`${title}-${uuidv4()}`} className={`child${this.inUrl(url) ? ' currentUrl text_green' : ''}`}>
                <div className="activeIndicator" />
                <img src={book} alt="book"/>
                <Link to={url}>{title}</Link>
            </li>
        );
    } // Renders child element. Gets name from slugs array

    parent = (data, name) => {
        const { active, isRoot } = this.state;
        if (this.inUrl(`/${name}/`)) {
            this.setActive(name);
        }

        return (
            <ul
                key={`${name}-${uuidv4()}`}
                className={`
        ${(active.indexOf(name) !== -1) ? 'active' : 'inactive'}
        ${isRoot ? ' root' : ''}
        `}
            >
                <li className={`parent${this.inUrl(`/${name}/`) ? ' currentUrl text_green' : ''}`} onClick={this.toggleActive} identifier={name}>
                    <button type="button" onClick={this.toggleActive} identifier={name}>
                        {name.replace(/-/g, ' ')}
                    </button>
                    {/*<svg className='inline float-right top-2 relative folder-icon' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path d="M12.5253 1.5H1.09298C0.882619 1.5 0.711915 1.16397 0.711915 0.75C0.711915 0.335973 0.88265 0 1.09298 0H12.5253C12.7356 0 12.9063 0.336035 12.9063 0.75C12.9063 1.16397 12.7356 1.5 12.5253 1.5Z" fill="#183E46"/>*/}
                    {/*    <path d="M12.5253 4.5H1.09298C0.882619 4.5 0.711915 4.16397 0.711915 3.75C0.711915 3.33597 0.88265 3 1.09298 3H12.5253C12.7356 3 12.9063 3.33604 12.9063 3.75C12.9063 4.16397 12.7356 4.5 12.5253 4.5Z" fill="#183E46"/>*/}
                    {/*    <path d="M1.09301 6H8.71452C8.92488 6 9.09558 6.33603 9.09558 6.75C9.09558 7.16403 8.92485 7.5 8.71452 7.5H1.09301C0.882645 7.5 0.711941 7.16397 0.711941 6.75C0.711909 6.33597 0.882645 6 1.09301 6Z" fill="#183E46"/>*/}
                    {/*</svg>*/}
                    <svg onClick={this.toggleActive} identifier={name} className={`inline float_left relative folder-icon parent_caret${this.isActive(name) ? ' active_parent_caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24"
                         viewBox="0 0 24 24" width="24">
                        <path clip-rule="evenodd"
                              d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z"
                              fill="#333333" fill-rule="evenodd">

                        </path>
                    </svg>
                    <svg onClick={this.toggleActive} identifier={name} className={`-mr-3 inline caret${this.isActive(name) ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#333333" fillRule="evenodd" /></svg>
                </li>
                <ListItem data={JSON.stringify(data)} />
            </ul>
        );
    } // renders parent element that has children

    render() {
        const { data } = this.state;
        const parsedData = JSON.parse(data);
        const keys = Object.keys(JSON.parse(data)).map((val) => val);

        return (
            <>

                {keys.map((val) => {
                    if (parsedData[val].url) {
                        return this.child(parsedData[val].url);
                    }
                    return this.parent(parsedData[val], val);
                })}
            </>
        );
    }
}

const LeftNav = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: id, order: ASC}) {
        nodes {
          fields {
            slug 
          }
          frontmatter {
            title
          }
          id
        }
      },
      leftNavLinks {
        value
      }
    }`);
    slugs = data.allMarkdownRemark.nodes;

    return (
        <>
        <div className="leftNav bg-gray-50 px-14 pt-5">
            <ListItem data={data.leftNavLinks.value} isRoot />
        </div>
         </>
    );
};

export default LeftNav;
/* eslint-enable */
